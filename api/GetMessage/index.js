module.exports = async function (context, req) {
  const date = "2024-11-20T12:23:33.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

