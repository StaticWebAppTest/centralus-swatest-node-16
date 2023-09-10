module.exports = async function (context, req) {
  const date = "2023-09-10T15:07:31.464Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

