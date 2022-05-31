module.exports = async function (context, req) {
  const date = "2022-05-31T10:13:17.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

