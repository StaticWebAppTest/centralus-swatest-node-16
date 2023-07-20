module.exports = async function (context, req) {
  const date = "2023-07-20T15:09:17.283Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

