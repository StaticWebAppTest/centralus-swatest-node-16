module.exports = async function (context, req) {
  const date = "2024-09-10T08:14:34.354Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

