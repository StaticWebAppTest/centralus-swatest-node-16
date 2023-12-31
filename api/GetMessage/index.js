module.exports = async function (context, req) {
  const date = "2023-12-31T18:10:28.624Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

