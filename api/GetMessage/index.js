module.exports = async function (context, req) {
  const date = "2023-02-14T11:08:33.716Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

