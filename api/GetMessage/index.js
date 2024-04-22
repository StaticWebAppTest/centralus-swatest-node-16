module.exports = async function (context, req) {
  const date = "2024-04-22T18:11:34.608Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

