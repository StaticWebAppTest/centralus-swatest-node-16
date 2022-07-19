module.exports = async function (context, req) {
  const date = "2022-07-19T06:14:38.804Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

