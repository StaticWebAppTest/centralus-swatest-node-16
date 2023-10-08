module.exports = async function (context, req) {
  const date = "2023-10-08T23:08:06.049Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

