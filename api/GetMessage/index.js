module.exports = async function (context, req) {
  const date = "2025-05-23T07:13:17.613Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

