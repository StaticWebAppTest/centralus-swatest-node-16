module.exports = async function (context, req) {
  const date = "2025-05-06T13:26:33.615Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

