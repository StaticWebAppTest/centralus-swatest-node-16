module.exports = async function (context, req) {
  const date = "2023-01-11T19:09:04.200Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

