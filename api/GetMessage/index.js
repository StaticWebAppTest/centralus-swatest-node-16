module.exports = async function (context, req) {
  const date = "2023-09-08T03:08:46.505Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

