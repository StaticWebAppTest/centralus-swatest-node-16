module.exports = async function (context, req) {
  const date = "2025-02-12T05:12:10.365Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

