module.exports = async function (context, req) {
  const date = "2024-07-26T11:09:51.569Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

