module.exports = async function (context, req) {
  const date = "2024-03-04T02:58:44.098Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

