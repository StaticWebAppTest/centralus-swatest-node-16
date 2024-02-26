module.exports = async function (context, req) {
  const date = "2024-02-26T15:09:38.560Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

