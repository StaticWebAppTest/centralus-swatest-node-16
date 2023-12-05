module.exports = async function (context, req) {
  const date = "2023-12-05T03:10:28.203Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

