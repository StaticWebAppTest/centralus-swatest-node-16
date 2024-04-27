module.exports = async function (context, req) {
  const date = "2024-04-27T09:08:49.636Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

