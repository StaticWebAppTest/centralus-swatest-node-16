module.exports = async function (context, req) {
  const date = "2024-10-02T14:10:53.375Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

