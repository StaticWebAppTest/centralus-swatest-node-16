module.exports = async function (context, req) {
  const date = "2023-04-07T12:16:14.206Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

