module.exports = async function (context, req) {
  const date = "2024-04-05T15:09:09.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

