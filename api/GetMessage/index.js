module.exports = async function (context, req) {
  const date = "2024-02-18T19:06:50.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

