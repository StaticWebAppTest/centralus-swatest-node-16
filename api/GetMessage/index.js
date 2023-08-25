module.exports = async function (context, req) {
  const date = "2023-08-25T23:09:14.635Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

