module.exports = async function (context, req) {
  const date = "2022-02-24T02:02:55.552Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

