module.exports = async function (context, req) {
  const date = "2022-10-28T20:13:21.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

