module.exports = async function (context, req) {
  const date = "2022-12-08T17:08:59.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

