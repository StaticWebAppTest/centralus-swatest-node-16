module.exports = async function (context, req) {
  const date = "2024-07-13T18:12:21.315Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

