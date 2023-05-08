module.exports = async function (context, req) {
  const date = "2023-05-08T08:12:04.682Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

