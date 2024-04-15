module.exports = async function (context, req) {
  const date = "2024-04-15T16:10:55.896Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

