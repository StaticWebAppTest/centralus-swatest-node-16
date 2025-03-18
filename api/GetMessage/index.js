module.exports = async function (context, req) {
  const date = "2025-03-18T21:11:16.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

