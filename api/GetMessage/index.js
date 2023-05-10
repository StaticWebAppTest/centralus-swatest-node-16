module.exports = async function (context, req) {
  const date = "2023-05-10T10:09:44.958Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

