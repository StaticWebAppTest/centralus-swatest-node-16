module.exports = async function (context, req) {
  const date = "2023-09-10T11:06:25.892Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

