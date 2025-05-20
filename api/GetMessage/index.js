module.exports = async function (context, req) {
  const date = "2025-05-20T08:19:03.099Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

