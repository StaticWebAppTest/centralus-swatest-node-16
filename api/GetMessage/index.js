module.exports = async function (context, req) {
  const date = "2022-05-01T22:10:15.688Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

