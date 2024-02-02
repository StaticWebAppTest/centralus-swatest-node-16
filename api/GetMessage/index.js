module.exports = async function (context, req) {
  const date = "2024-02-02T14:08:32.603Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

