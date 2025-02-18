module.exports = async function (context, req) {
  const date = "2025-02-18T17:11:15.145Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

