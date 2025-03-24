module.exports = async function (context, req) {
  const date = "2025-03-24T21:11:23.151Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

