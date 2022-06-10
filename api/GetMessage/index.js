module.exports = async function (context, req) {
  const date = "2022-06-10T19:08:32.662Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

