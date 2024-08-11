module.exports = async function (context, req) {
  const date = "2024-08-11T02:07:39.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

