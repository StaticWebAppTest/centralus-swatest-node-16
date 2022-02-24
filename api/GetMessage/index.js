module.exports = async function (context, req) {
  const date = "2022-02-24T00:40:38.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

