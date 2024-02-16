module.exports = async function (context, req) {
  const date = "2024-02-16T02:15:25.166Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

