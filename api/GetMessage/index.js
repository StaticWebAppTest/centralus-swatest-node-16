module.exports = async function (context, req) {
  const date = "2023-05-23T15:09:42.544Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

