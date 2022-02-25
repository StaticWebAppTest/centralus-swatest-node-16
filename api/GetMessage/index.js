module.exports = async function (context, req) {
  const date = "2022-02-25T03:10:15.000Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

