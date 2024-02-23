module.exports = async function (context, req) {
  const date = "2024-02-23T16:10:39.315Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

