module.exports = async function (context, req) {
  const date = "2022-04-30T20:11:16.376Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

