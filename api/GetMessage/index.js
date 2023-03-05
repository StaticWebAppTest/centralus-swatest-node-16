module.exports = async function (context, req) {
  const date = "2023-03-05T20:10:03.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

