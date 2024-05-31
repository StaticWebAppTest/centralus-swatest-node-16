module.exports = async function (context, req) {
  const date = "2024-05-31T18:12:52.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

