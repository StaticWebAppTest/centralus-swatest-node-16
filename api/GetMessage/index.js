module.exports = async function (context, req) {
  const date = "2023-12-06T02:23:28.098Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

