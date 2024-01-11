module.exports = async function (context, req) {
  const date = "2024-01-11T12:17:20.246Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

