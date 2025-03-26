module.exports = async function (context, req) {
  const date = "2025-03-26T19:10:22.392Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

