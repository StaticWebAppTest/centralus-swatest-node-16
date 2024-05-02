module.exports = async function (context, req) {
  const date = "2024-05-02T02:20:02.980Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

