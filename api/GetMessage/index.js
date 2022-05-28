module.exports = async function (context, req) {
  const date = "2022-05-28T03:39:17.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

