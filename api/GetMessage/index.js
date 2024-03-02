module.exports = async function (context, req) {
  const date = "2024-03-02T11:07:58.741Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

