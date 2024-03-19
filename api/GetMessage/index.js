module.exports = async function (context, req) {
  const date = "2024-03-19T21:08:06.682Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

