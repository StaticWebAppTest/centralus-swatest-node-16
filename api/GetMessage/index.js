module.exports = async function (context, req) {
  const date = "2023-12-14T07:09:00.055Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

