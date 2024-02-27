module.exports = async function (context, req) {
  const date = "2024-02-27T11:07:33.467Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

