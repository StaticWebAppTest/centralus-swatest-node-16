module.exports = async function (context, req) {
  const date = "2023-05-14T03:08:42.173Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

