module.exports = async function (context, req) {
  const date = "2024-06-02T07:10:06.791Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

