module.exports = async function (context, req) {
  const date = "2023-04-14T15:09:00.851Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

