module.exports = async function (context, req) {
  const date = "2024-06-17T17:09:46.878Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

