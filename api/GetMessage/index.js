module.exports = async function (context, req) {
  const date = "2022-12-29T10:09:55.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

