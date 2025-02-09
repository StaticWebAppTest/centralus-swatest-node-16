module.exports = async function (context, req) {
  const date = "2025-02-09T18:14:18.145Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

