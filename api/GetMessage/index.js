module.exports = async function (context, req) {
  const date = "2024-06-11T23:09:37.746Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

