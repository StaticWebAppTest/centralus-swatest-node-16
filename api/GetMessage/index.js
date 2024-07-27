module.exports = async function (context, req) {
  const date = "2024-07-27T07:10:44.692Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

