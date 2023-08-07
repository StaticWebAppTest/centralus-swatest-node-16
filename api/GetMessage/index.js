module.exports = async function (context, req) {
  const date = "2023-08-07T03:09:06.905Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

