module.exports = async function (context, req) {
  const date = "2023-07-18T10:10:07.049Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

