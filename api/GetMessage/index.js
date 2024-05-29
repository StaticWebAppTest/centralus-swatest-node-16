module.exports = async function (context, req) {
  const date = "2024-05-29T11:09:12.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

