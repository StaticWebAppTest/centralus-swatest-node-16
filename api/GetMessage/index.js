module.exports = async function (context, req) {
  const date = "2023-06-30T23:09:17.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

