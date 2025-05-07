module.exports = async function (context, req) {
  const date = "2025-05-07T08:18:46.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

