module.exports = async function (context, req) {
  const date = "2022-09-28T16:23:27.523Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

