module.exports = async function (context, req) {
  const date = "2025-05-02T04:15:58.475Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

