module.exports = async function (context, req) {
  const date = "2024-07-20T05:10:43.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

