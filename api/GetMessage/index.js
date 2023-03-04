module.exports = async function (context, req) {
  const date = "2023-03-04T14:08:23.424Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

