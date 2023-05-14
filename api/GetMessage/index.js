module.exports = async function (context, req) {
  const date = "2023-05-14T23:08:14.596Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

