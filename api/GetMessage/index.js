module.exports = async function (context, req) {
  const date = "2024-01-30T04:10:27.490Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

