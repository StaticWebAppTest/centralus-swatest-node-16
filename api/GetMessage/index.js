module.exports = async function (context, req) {
  const date = "2024-02-28T15:09:08.343Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

