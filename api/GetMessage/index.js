module.exports = async function (context, req) {
  const date = "2025-06-04T05:13:58.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

