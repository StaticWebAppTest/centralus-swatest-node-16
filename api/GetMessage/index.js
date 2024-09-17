module.exports = async function (context, req) {
  const date = "2024-09-17T09:12:04.192Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

