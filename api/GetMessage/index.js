module.exports = async function (context, req) {
  const date = "2024-01-26T11:07:17.475Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

