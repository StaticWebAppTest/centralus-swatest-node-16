module.exports = async function (context, req) {
  const date = "2023-09-30T11:06:35.206Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

