module.exports = async function (context, req) {
  const date = "2024-07-11T02:36:48.406Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

