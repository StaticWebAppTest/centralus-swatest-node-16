module.exports = async function (context, req) {
  const date = "2024-01-15T16:11:44.322Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

