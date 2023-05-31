module.exports = async function (context, req) {
  const date = "2023-05-31T13:12:04.741Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

