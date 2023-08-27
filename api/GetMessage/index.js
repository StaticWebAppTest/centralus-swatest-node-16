module.exports = async function (context, req) {
  const date = "2023-08-27T23:07:35.744Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

