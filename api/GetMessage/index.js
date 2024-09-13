module.exports = async function (context, req) {
  const date = "2024-09-13T08:14:27.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

