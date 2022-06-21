module.exports = async function (context, req) {
  const date = "2022-06-21T17:24:35.200Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

