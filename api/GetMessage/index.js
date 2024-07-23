module.exports = async function (context, req) {
  const date = "2024-07-23T10:10:49.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

