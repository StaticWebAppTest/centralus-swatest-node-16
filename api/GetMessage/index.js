module.exports = async function (context, req) {
  const date = "2023-07-08T03:23:48.966Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

