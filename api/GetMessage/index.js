module.exports = async function (context, req) {
  const date = "2024-07-11T04:13:39.819Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

