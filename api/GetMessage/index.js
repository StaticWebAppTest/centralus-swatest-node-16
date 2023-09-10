module.exports = async function (context, req) {
  const date = "2023-09-10T14:06:49.210Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

