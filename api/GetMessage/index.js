module.exports = async function (context, req) {
  const date = "2025-05-31T14:11:11.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

