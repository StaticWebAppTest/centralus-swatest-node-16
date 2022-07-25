module.exports = async function (context, req) {
  const date = "2022-07-25T15:11:24.286Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

