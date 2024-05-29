module.exports = async function (context, req) {
  const date = "2024-05-29T17:10:05.744Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

