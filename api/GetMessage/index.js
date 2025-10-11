module.exports = async function (context, req) {
  const date = "2025-10-11T02:17:32.482Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

