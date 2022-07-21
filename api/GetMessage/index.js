module.exports = async function (context, req) {
  const date = "2022-07-21T12:22:52.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

