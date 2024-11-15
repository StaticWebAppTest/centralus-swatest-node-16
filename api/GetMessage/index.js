module.exports = async function (context, req) {
  const date = "2024-11-15T12:23:09.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

