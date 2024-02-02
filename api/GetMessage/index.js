module.exports = async function (context, req) {
  const date = "2024-02-02T22:07:59.495Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

