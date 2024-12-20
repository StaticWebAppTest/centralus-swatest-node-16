module.exports = async function (context, req) {
  const date = "2024-12-20T11:09:33.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

