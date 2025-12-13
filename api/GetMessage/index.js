module.exports = async function (context, req) {
  const date = "2025-12-13T21:11:33.274Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

