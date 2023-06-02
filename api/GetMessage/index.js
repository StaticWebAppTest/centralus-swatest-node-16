module.exports = async function (context, req) {
  const date = "2023-06-02T20:08:57.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

