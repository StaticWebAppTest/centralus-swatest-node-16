module.exports = async function (context, req) {
  const date = "2024-03-29T09:08:47.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

