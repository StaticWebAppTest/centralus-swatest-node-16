module.exports = async function (context, req) {
  const date = "2024-05-18T09:10:27.467Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

