module.exports = async function (context, req) {
  const date = "2022-09-10T08:15:14.953Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

