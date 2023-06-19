module.exports = async function (context, req) {
  const date = "2023-06-19T07:09:18.231Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

