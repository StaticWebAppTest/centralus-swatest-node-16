module.exports = async function (context, req) {
  const date = "2024-09-18T18:14:54.624Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

