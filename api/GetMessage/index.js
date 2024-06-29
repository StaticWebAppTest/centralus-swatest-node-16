module.exports = async function (context, req) {
  const date = "2024-06-29T13:10:37.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

