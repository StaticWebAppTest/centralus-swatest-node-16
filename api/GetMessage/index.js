module.exports = async function (context, req) {
  const date = "2023-03-31T18:10:25.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

