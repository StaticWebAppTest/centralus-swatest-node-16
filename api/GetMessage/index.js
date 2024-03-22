module.exports = async function (context, req) {
  const date = "2024-03-22T17:07:55.398Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

