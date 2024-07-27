module.exports = async function (context, req) {
  const date = "2024-07-27T05:10:34.834Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

