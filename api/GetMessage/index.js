module.exports = async function (context, req) {
  const date = "2023-12-07T13:12:32.052Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

