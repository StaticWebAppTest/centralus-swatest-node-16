module.exports = async function (context, req) {
  const date = "2024-01-16T10:10:04.900Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

