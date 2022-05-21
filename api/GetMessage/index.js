module.exports = async function (context, req) {
  const date = "2022-05-21T06:14:34.203Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

