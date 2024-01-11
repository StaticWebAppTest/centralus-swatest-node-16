module.exports = async function (context, req) {
  const date = "2024-01-11T04:11:35.720Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

