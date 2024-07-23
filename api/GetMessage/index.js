module.exports = async function (context, req) {
  const date = "2024-07-23T22:10:16.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

