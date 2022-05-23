module.exports = async function (context, req) {
  const date = "2022-05-23T06:15:59.575Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

