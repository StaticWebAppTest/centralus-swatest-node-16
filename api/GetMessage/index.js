module.exports = async function (context, req) {
  const date = "2024-02-27T09:08:59.354Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

