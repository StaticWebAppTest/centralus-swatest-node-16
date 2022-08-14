module.exports = async function (context, req) {
  const date = "2022-08-14T03:25:45.744Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

