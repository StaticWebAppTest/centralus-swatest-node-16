module.exports = async function (context, req) {
  const date = "2023-12-26T15:08:46.387Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

