module.exports = async function (context, req) {
  const date = "2022-06-27T23:10:28.049Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

