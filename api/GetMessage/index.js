module.exports = async function (context, req) {
  const date = "2025-02-26T15:13:18.576Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

