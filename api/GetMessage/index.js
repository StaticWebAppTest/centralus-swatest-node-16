module.exports = async function (context, req) {
  const date = "2023-07-19T20:08:43.739Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

