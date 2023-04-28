module.exports = async function (context, req) {
  const date = "2023-04-28T19:07:01.536Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

