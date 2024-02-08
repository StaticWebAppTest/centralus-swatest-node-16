module.exports = async function (context, req) {
  const date = "2024-02-08T09:09:35.166Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

