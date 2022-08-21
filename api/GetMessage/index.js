module.exports = async function (context, req) {
  const date = "2022-08-21T14:09:25.744Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

