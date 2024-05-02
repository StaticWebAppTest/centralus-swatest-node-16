module.exports = async function (context, req) {
  const date = "2024-05-02T06:12:42.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

