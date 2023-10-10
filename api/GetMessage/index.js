module.exports = async function (context, req) {
  const date = "2023-10-10T22:08:12.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

