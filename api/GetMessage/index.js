module.exports = async function (context, req) {
  const date = "2024-02-24T22:08:12.103Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

