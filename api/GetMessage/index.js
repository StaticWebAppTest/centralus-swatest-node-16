module.exports = async function (context, req) {
  const date = "2022-03-14T13:16:42.756Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

