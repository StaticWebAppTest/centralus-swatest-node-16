module.exports = async function (context, req) {
  const date = "2024-04-14T07:51:48.354Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

