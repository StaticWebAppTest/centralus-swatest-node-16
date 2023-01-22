module.exports = async function (context, req) {
  const date = "2023-01-22T17:07:44.285Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

