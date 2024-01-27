module.exports = async function (context, req) {
  const date = "2024-01-27T08:10:36.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

