module.exports = async function (context, req) {
  const date = "2022-05-10T02:17:43.946Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

