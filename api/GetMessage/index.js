module.exports = async function (context, req) {
  const date = "2023-11-23T15:09:31.544Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

