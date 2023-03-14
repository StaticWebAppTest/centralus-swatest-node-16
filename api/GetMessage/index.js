module.exports = async function (context, req) {
  const date = "2023-03-14T10:11:57.851Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

