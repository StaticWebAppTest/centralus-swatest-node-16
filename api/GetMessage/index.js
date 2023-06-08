module.exports = async function (context, req) {
  const date = "2023-06-08T06:11:48.407Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

