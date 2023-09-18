module.exports = async function (context, req) {
  const date = "2023-09-18T04:10:43.158Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

