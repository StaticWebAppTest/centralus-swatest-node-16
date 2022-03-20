module.exports = async function (context, req) {
  const date = "2022-03-20T12:15:28.409Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

