module.exports = async function (context, req) {
  const date = "2022-09-03T20:11:35.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

