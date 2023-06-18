module.exports = async function (context, req) {
  const date = "2023-06-18T12:15:58.682Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

