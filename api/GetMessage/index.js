module.exports = async function (context, req) {
  const date = "2023-03-06T10:11:04.668Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

