module.exports = async function (context, req) {
  const date = "2024-05-17T03:10:56.246Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

