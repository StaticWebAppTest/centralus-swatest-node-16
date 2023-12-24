module.exports = async function (context, req) {
  const date = "2023-12-24T07:07:48.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

