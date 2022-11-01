module.exports = async function (context, req) {
  const date = "2022-11-01T07:14:49.203Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

