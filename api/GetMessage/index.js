module.exports = async function (context, req) {
  const date = "2022-12-31T13:11:39.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

