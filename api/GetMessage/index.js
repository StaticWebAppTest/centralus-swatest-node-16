module.exports = async function (context, req) {
  const date = "2023-12-28T10:09:58.035Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

