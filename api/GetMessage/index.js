module.exports = async function (context, req) {
  const date = "2023-04-14T23:08:21.660Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

