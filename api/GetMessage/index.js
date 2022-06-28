module.exports = async function (context, req) {
  const date = "2022-06-28T01:01:04.927Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

