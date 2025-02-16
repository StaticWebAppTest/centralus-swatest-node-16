module.exports = async function (context, req) {
  const date = "2025-02-16T13:14:53.678Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

