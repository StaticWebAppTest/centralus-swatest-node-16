module.exports = async function (context, req) {
  const date = "2023-02-27T10:11:38.818Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

