module.exports = async function (context, req) {
  const date = "2024-01-11T10:10:00.658Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

