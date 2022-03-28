module.exports = async function (context, req) {
  const date = "2022-03-28T20:11:17.769Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

