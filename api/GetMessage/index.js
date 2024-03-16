module.exports = async function (context, req) {
  const date = "2024-03-16T04:10:17.467Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

