module.exports = async function (context, req) {
  const date = "2023-09-13T07:08:17.744Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

