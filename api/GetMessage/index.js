module.exports = async function (context, req) {
  const date = "2022-05-05T03:54:13.966Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

