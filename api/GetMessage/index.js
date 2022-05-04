module.exports = async function (context, req) {
  const date = "2022-05-04T00:56:55.109Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

