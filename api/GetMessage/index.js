module.exports = async function (context, req) {
  const date = "2023-01-28T04:11:08.688Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

