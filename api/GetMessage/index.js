module.exports = async function (context, req) {
  const date = "2023-04-05T21:08:43.896Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

