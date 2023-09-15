module.exports = async function (context, req) {
  const date = "2023-09-15T02:16:54.354Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

