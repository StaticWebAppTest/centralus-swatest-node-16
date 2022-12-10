module.exports = async function (context, req) {
  const date = "2022-12-10T12:16:35.944Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

