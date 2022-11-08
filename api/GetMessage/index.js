module.exports = async function (context, req) {
  const date = "2022-11-08T03:20:24.098Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

