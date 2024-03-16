module.exports = async function (context, req) {
  const date = "2024-03-16T11:06:43.841Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

