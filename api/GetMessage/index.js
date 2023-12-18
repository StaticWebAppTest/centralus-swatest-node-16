module.exports = async function (context, req) {
  const date = "2023-12-18T12:17:52.739Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

