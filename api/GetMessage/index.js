module.exports = async function (context, req) {
  const date = "2024-08-25T21:09:13.878Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

