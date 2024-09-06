module.exports = async function (context, req) {
  const date = "2024-09-06T07:10:34.785Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

