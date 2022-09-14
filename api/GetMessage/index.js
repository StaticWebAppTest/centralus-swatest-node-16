module.exports = async function (context, req) {
  const date = "2022-09-14T10:13:25.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

