module.exports = async function (context, req) {
  const date = "2022-06-05T23:09:51.636Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

