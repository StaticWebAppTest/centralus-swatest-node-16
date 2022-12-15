module.exports = async function (context, req) {
  const date = "2022-12-15T07:09:05.692Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

