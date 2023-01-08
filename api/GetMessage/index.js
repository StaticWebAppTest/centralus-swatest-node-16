module.exports = async function (context, req) {
  const date = "2023-01-08T19:07:12.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

