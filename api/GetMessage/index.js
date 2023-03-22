module.exports = async function (context, req) {
  const date = "2023-03-22T20:09:31.693Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

