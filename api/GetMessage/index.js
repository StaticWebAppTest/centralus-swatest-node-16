module.exports = async function (context, req) {
  const date = "2023-09-23T13:08:37.710Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

