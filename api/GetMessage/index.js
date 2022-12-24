module.exports = async function (context, req) {
  const date = "2022-12-24T02:01:19.076Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

