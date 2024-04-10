module.exports = async function (context, req) {
  const date = "2024-04-10T09:11:22.885Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

