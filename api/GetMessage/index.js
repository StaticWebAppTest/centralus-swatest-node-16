module.exports = async function (context, req) {
  const date = "2025-12-01T08:21:54.108Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

