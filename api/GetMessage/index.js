module.exports = async function (context, req) {
  const date = "2023-07-31T06:11:59.772Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

