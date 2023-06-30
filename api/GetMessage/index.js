module.exports = async function (context, req) {
  const date = "2023-06-30T17:08:43.052Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

