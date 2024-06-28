module.exports = async function (context, req) {
  const date = "2024-06-28T10:10:50.744Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

