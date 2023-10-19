module.exports = async function (context, req) {
  const date = "2023-10-19T10:09:32.231Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

