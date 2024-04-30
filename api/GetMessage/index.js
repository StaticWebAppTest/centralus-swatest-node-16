module.exports = async function (context, req) {
  const date = "2024-04-30T10:10:32.559Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

