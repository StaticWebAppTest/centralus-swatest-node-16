module.exports = async function (context, req) {
  const date = "2023-03-05T07:08:27.498Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

