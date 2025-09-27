module.exports = async function (context, req) {
  const date = "2025-09-27T21:10:11.003Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

