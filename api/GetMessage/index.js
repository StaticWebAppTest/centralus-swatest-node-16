module.exports = async function (context, req) {
  const date = "2022-09-09T07:18:29.109Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

