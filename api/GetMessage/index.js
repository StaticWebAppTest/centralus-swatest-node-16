module.exports = async function (context, req) {
  const date = "2023-12-10T07:08:11.008Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

