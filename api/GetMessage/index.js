module.exports = async function (context, req) {
  const date = "2024-02-01T05:08:40.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

