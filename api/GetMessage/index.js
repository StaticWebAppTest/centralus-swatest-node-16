module.exports = async function (context, req) {
  const date = "2023-01-27T03:10:13.693Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

