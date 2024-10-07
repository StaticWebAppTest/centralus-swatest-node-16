module.exports = async function (context, req) {
  const date = "2024-10-07T12:23:20.890Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

