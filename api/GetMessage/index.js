module.exports = async function (context, req) {
  const date = "2024-01-24T12:18:04.545Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

