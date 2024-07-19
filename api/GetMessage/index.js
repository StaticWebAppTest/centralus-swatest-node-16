module.exports = async function (context, req) {
  const date = "2024-07-19T18:13:39.787Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

