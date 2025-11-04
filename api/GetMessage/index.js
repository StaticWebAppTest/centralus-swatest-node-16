module.exports = async function (context, req) {
  const date = "2025-11-04T21:12:36.483Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

