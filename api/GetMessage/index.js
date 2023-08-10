module.exports = async function (context, req) {
  const date = "2023-08-10T12:18:21.066Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

