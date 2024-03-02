module.exports = async function (context, req) {
  const date = "2024-03-02T07:07:32.917Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

