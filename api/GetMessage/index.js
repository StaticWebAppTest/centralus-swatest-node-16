module.exports = async function (context, req) {
  const date = "2024-06-04T10:10:38.770Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

