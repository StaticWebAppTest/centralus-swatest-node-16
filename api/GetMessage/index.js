module.exports = async function (context, req) {
  const date = "2023-01-03T15:10:30.372Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

