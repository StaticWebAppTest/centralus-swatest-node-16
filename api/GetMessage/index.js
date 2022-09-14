module.exports = async function (context, req) {
  const date = "2022-09-14T09:14:26.688Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

