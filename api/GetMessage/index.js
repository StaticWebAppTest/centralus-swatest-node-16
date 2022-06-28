module.exports = async function (context, req) {
  const date = "2022-06-28T03:36:50.523Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

