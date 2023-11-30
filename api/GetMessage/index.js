module.exports = async function (context, req) {
  const date = "2023-11-30T15:08:33.467Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

