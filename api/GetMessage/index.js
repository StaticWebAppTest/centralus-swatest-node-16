module.exports = async function (context, req) {
  const date = "2023-08-14T09:08:39.911Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

