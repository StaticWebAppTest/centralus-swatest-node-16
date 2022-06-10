module.exports = async function (context, req) {
  const date = "2022-06-10T15:12:43.596Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

