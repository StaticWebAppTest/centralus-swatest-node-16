module.exports = async function (context, req) {
  const date = "2024-04-08T11:08:12.837Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

