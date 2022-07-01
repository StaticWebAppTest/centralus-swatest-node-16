module.exports = async function (context, req) {
  const date = "2022-07-01T08:14:12.069Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

