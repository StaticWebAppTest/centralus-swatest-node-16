module.exports = async function (context, req) {
  const date = "2024-06-22T14:10:17.540Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

