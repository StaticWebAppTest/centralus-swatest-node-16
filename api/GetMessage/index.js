module.exports = async function (context, req) {
  const date = "2022-03-07T16:13:36.544Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

