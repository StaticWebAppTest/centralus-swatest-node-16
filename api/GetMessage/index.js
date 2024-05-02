module.exports = async function (context, req) {
  const date = "2024-05-02T11:07:53.042Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

