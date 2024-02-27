module.exports = async function (context, req) {
  const date = "2024-02-27T23:08:21.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

