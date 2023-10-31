module.exports = async function (context, req) {
  const date = "2023-10-31T01:44:09.881Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

