module.exports = async function (context, req) {
  const date = "2024-05-31T06:13:52.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

