module.exports = async function (context, req) {
  const date = "2023-05-28T10:08:27.682Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

