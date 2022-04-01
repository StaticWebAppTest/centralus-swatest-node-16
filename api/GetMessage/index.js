module.exports = async function (context, req) {
  const date = "2022-04-01T00:53:30.895Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

