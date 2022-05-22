module.exports = async function (context, req) {
  const date = "2022-05-22T08:13:04.321Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

