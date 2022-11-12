module.exports = async function (context, req) {
  const date = "2022-11-12T12:19:29.918Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

