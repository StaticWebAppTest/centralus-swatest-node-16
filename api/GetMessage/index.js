module.exports = async function (context, req) {
  const date = "2023-06-19T17:07:40.343Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

