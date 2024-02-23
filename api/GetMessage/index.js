module.exports = async function (context, req) {
  const date = "2024-02-23T18:12:04.909Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

