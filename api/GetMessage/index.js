module.exports = async function (context, req) {
  const date = "2022-11-30T18:13:00.769Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

