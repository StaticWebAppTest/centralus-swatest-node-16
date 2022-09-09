module.exports = async function (context, req) {
  const date = "2022-09-09T05:16:46.477Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

