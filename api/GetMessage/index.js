module.exports = async function (context, req) {
  const date = "2025-04-27T11:09:21.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

