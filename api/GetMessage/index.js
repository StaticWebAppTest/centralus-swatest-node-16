module.exports = async function (context, req) {
  const date = "2024-07-14T19:09:25.365Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

