module.exports = async function (context, req) {
  const date = "2024-11-15T11:10:29.504Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

