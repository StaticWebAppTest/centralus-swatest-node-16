module.exports = async function (context, req) {
  const date = "2024-01-11T19:07:07.131Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

