module.exports = async function (context, req) {
  const date = "2023-03-29T00:55:08.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

