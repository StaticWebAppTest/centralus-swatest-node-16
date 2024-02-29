module.exports = async function (context, req) {
  const date = "2024-02-29T10:10:27.687Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

