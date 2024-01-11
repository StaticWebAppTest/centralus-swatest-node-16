module.exports = async function (context, req) {
  const date = "2024-01-11T08:12:31.508Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

