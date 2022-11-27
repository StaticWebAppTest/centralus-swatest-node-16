module.exports = async function (context, req) {
  const date = "2022-11-27T13:17:21.330Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

