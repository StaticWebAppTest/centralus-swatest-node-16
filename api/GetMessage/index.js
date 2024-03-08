module.exports = async function (context, req) {
  const date = "2024-03-08T00:41:04.542Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

