module.exports = async function (context, req) {
  const date = "2025-12-02T05:14:20.974Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

