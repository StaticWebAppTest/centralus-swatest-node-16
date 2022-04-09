module.exports = async function (context, req) {
  const date = "2022-04-09T13:17:07.710Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

