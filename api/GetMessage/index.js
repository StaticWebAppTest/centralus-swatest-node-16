module.exports = async function (context, req) {
  const date = "2023-12-30T22:07:49.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

