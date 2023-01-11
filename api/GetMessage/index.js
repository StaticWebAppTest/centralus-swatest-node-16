module.exports = async function (context, req) {
  const date = "2023-01-11T17:14:26.508Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

