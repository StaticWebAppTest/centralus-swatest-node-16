module.exports = async function (context, req) {
  const date = "2023-03-03T23:10:29.526Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

