module.exports = async function (context, req) {
  const date = "2022-04-08T10:14:29.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

