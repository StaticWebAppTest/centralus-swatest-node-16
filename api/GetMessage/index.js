module.exports = async function (context, req) {
  const date = "2024-05-11T11:07:29.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

