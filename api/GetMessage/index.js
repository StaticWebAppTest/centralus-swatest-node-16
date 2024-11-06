module.exports = async function (context, req) {
  const date = "2024-11-06T08:15:55.487Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

