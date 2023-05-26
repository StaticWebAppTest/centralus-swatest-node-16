module.exports = async function (context, req) {
  const date = "2023-05-26T08:11:16.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

