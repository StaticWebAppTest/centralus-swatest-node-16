module.exports = async function (context, req) {
  const date = "2023-04-20T07:08:42.662Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

