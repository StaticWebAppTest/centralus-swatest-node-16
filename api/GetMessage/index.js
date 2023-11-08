module.exports = async function (context, req) {
  const date = "2023-11-08T15:09:25.231Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

