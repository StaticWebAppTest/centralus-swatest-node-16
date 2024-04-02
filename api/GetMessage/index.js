module.exports = async function (context, req) {
  const date = "2024-04-02T08:12:02.406Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

