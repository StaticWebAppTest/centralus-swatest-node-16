module.exports = async function (context, req) {
  const date = "2024-02-12T22:08:02.970Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

