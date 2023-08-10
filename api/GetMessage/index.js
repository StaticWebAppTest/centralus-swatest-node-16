module.exports = async function (context, req) {
  const date = "2023-08-10T15:09:25.164Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

