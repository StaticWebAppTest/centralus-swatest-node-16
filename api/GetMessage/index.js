module.exports = async function (context, req) {
  const date = "2024-07-10T11:08:31.885Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

