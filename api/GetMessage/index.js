module.exports = async function (context, req) {
  const date = "2023-09-16T03:08:46.489Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

