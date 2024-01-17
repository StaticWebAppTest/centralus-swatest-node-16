module.exports = async function (context, req) {
  const date = "2024-01-17T05:09:24.101Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

