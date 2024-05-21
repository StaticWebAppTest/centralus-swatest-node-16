module.exports = async function (context, req) {
  const date = "2024-05-21T23:10:44.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

