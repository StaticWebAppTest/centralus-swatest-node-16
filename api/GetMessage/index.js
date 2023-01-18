module.exports = async function (context, req) {
  const date = "2023-01-18T16:13:00.487Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

