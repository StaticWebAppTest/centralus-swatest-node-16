module.exports = async function (context, req) {
  const date = "2023-01-14T05:08:13.708Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

