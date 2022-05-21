module.exports = async function (context, req) {
  const date = "2022-05-21T23:11:06.076Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

