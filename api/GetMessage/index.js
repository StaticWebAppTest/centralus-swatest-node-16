module.exports = async function (context, req) {
  const date = "2023-10-06T07:08:15.744Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

