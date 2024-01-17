module.exports = async function (context, req) {
  const date = "2024-01-17T14:09:11.552Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

