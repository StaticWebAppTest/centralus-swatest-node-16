module.exports = async function (context, req) {
  const date = "2022-07-01T09:10:48.145Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

