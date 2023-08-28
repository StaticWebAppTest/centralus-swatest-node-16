module.exports = async function (context, req) {
  const date = "2023-08-28T12:16:56.487Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

