module.exports = async function (context, req) {
  const date = "2023-10-20T14:08:36.958Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

