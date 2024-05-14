module.exports = async function (context, req) {
  const date = "2024-05-14T07:10:16.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

