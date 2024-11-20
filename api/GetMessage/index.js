module.exports = async function (context, req) {
  const date = "2024-11-20T06:17:33.045Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

