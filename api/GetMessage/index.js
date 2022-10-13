module.exports = async function (context, req) {
  const date = "2022-10-13T08:17:58.964Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

