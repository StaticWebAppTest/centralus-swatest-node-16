module.exports = async function (context, req) {
  const date = "2024-03-15T15:09:13.026Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

