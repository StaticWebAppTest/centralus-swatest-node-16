module.exports = async function (context, req) {
  const date = "2023-02-05T10:09:07.521Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

