module.exports = async function (context, req) {
  const date = "2022-12-17T15:08:00.069Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

