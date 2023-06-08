module.exports = async function (context, req) {
  const date = "2023-06-08T15:08:49.130Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

