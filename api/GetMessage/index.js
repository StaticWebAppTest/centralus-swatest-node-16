module.exports = async function (context, req) {
  const date = "2023-04-10T08:11:37.206Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

