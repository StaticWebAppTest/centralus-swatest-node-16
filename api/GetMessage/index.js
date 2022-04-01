module.exports = async function (context, req) {
  const date = "2022-04-01T19:08:17.466Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

