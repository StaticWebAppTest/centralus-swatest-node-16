module.exports = async function (context, req) {
  const date = "2022-09-27T10:15:29.708Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

