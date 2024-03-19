module.exports = async function (context, req) {
  const date = "2024-03-19T11:08:22.467Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

