module.exports = async function (context, req) {
  const date = "2024-01-29T09:09:38.020Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

