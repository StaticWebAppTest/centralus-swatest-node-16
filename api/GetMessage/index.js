module.exports = async function (context, req) {
  const date = "2024-04-04T02:18:18.468Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

