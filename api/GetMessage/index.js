module.exports = async function (context, req) {
  const date = "2023-05-05T12:16:04.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

