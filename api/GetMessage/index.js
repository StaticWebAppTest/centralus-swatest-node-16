module.exports = async function (context, req) {
  const date = "2024-06-13T05:11:13.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

