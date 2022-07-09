module.exports = async function (context, req) {
  const date = "2022-07-09T13:20:51.421Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

