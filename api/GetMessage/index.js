module.exports = async function (context, req) {
  const date = "2024-05-03T07:09:20.635Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

