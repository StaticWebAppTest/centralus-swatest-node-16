module.exports = async function (context, req) {
  const date = "2024-04-20T08:10:44.116Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

