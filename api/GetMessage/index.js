module.exports = async function (context, req) {
  const date = "2023-05-31T16:10:44.017Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

