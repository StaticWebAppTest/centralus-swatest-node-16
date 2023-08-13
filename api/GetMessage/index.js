module.exports = async function (context, req) {
  const date = "2023-08-13T15:07:22.688Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

