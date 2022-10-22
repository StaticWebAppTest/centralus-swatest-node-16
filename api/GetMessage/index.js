module.exports = async function (context, req) {
  const date = "2022-10-22T13:35:44.158Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

