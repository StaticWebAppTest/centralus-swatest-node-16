module.exports = async function (context, req) {
  const date = "2023-08-01T07:08:36.487Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

