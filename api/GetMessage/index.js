module.exports = async function (context, req) {
  const date = "2022-04-03T13:16:32.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

