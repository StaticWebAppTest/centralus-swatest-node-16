module.exports = async function (context, req) {
  const date = "2022-09-28T07:27:58.797Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

