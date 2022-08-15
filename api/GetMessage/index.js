module.exports = async function (context, req) {
  const date = "2022-08-15T19:08:23.540Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

