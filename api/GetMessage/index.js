module.exports = async function (context, req) {
  const date = "2025-11-28T21:11:39.946Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

