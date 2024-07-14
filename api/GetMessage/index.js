module.exports = async function (context, req) {
  const date = "2024-07-14T23:10:21.506Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

