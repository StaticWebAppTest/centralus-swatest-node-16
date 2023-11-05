module.exports = async function (context, req) {
  const date = "2023-11-05T08:10:30.232Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

