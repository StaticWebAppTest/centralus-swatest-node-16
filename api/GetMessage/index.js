module.exports = async function (context, req) {
  const date = "2024-04-10T02:17:20.213Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

