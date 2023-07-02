module.exports = async function (context, req) {
  const date = "2023-07-02T23:09:19.744Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

