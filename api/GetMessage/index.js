module.exports = async function (context, req) {
  const date = "2024-05-25T17:09:41.233Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

