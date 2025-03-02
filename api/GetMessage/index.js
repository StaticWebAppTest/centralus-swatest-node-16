module.exports = async function (context, req) {
  const date = "2025-03-02T16:13:40.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

