module.exports = async function (context, req) {
  const date = "2024-06-17T01:59:28.368Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

