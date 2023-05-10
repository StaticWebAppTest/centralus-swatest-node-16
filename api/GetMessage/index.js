module.exports = async function (context, req) {
  const date = "2023-05-10T15:08:31.710Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

