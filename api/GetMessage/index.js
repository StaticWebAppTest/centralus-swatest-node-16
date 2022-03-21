module.exports = async function (context, req) {
  const date = "2022-03-21T12:17:44.967Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

