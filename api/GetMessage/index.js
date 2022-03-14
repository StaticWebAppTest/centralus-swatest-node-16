module.exports = async function (context, req) {
  const date = "2022-03-14T06:13:04.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

