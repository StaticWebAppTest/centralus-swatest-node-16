module.exports = async function (context, req) {
  const date = "2023-02-10T05:09:36.892Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

