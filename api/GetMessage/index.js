module.exports = async function (context, req) {
  const date = "2024-01-06T15:08:30.787Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

