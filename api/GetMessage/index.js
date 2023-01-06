module.exports = async function (context, req) {
  const date = "2023-01-06T23:09:05.052Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

