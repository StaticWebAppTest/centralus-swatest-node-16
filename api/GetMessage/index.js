module.exports = async function (context, req) {
  const date = "2024-08-11T06:15:17.186Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

