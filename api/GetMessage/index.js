module.exports = async function (context, req) {
  const date = "2024-06-14T22:10:15.579Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

