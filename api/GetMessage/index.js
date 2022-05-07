module.exports = async function (context, req) {
  const date = "2022-05-07T10:11:43.414Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

