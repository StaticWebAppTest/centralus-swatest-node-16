module.exports = async function (context, req) {
  const date = "2024-11-10T02:19:44.875Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

