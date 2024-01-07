module.exports = async function (context, req) {
  const date = "2024-01-07T18:11:02.754Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

