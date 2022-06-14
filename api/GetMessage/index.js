module.exports = async function (context, req) {
  const date = "2022-06-14T13:26:04.355Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

