module.exports = async function (context, req) {
  const date = "2022-10-03T16:23:26.738Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

