module.exports = async function (context, req) {
  const date = "2024-05-23T23:10:42.506Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

