module.exports = async function (context, req) {
  const date = "2022-03-28T10:11:43.259Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

