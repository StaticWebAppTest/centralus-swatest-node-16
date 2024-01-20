module.exports = async function (context, req) {
  const date = "2024-01-20T05:08:45.706Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

