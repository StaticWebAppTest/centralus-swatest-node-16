module.exports = async function (context, req) {
  const date = "2023-10-03T14:08:51.512Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

