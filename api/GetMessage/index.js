module.exports = async function (context, req) {
  const date = "2023-01-30T03:10:27.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

