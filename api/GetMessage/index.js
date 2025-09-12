module.exports = async function (context, req) {
  const date = "2025-09-12T12:25:01.480Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

