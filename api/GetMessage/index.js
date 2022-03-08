module.exports = async function (context, req) {
  const date = "2022-03-08T11:08:35.177Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

