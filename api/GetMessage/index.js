module.exports = async function (context, req) {
  const date = "2024-07-21T23:10:52.266Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

