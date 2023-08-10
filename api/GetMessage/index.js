module.exports = async function (context, req) {
  const date = "2023-08-10T14:08:35.228Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

