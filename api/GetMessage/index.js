module.exports = async function (context, req) {
  const date = "2023-12-23T12:15:00.372Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

