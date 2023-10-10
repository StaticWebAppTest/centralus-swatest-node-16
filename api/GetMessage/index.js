module.exports = async function (context, req) {
  const date = "2023-10-10T14:08:36.228Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

