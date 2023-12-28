module.exports = async function (context, req) {
  const date = "2023-12-28T20:08:47.682Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

