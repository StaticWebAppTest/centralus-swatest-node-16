module.exports = async function (context, req) {
  const date = "2024-04-16T02:17:17.850Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

