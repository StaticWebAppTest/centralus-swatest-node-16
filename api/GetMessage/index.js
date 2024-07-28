module.exports = async function (context, req) {
  const date = "2024-07-28T15:09:34.462Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

