module.exports = async function (context, req) {
  const date = "2022-06-21T22:09:49.728Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

