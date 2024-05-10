module.exports = async function (context, req) {
  const date = "2024-05-10T20:09:44.467Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

