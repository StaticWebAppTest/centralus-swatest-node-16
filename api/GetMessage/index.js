module.exports = async function (context, req) {
  const date = "2023-01-03T06:10:29.319Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

