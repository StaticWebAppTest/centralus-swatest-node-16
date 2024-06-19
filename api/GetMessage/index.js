module.exports = async function (context, req) {
  const date = "2024-06-19T22:09:53.175Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

