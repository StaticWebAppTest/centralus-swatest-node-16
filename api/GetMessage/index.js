module.exports = async function (context, req) {
  const date = "2024-04-08T08:12:31.559Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

