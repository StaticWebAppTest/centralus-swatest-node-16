module.exports = async function (context, req) {
  const date = "2024-06-02T08:11:44.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

