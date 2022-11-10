module.exports = async function (context, req) {
  const date = "2022-11-10T15:11:23.383Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

