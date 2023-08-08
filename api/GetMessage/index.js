module.exports = async function (context, req) {
  const date = "2023-08-08T13:11:29.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

