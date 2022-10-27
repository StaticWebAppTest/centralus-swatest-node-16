module.exports = async function (context, req) {
  const date = "2022-10-27T01:05:53.076Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

