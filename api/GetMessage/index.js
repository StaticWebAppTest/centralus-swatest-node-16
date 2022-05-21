module.exports = async function (context, req) {
  const date = "2022-05-21T16:13:55.689Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

