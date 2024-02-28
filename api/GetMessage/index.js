module.exports = async function (context, req) {
  const date = "2024-02-28T22:08:10.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

