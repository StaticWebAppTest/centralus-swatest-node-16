module.exports = async function (context, req) {
  const date = "2022-07-09T06:12:42.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

