module.exports = async function (context, req) {
  const date = "2023-02-25T10:09:35.231Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

