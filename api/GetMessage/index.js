module.exports = async function (context, req) {
  const date = "2022-10-06T14:29:03.984Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

