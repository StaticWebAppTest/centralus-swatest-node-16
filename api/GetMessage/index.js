module.exports = async function (context, req) {
  const date = "2023-08-04T02:26:47.354Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

