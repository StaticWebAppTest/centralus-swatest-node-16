module.exports = async function (context, req) {
  const date = "2024-08-25T14:09:04.164Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

