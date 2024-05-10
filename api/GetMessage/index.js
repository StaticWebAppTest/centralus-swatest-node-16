module.exports = async function (context, req) {
  const date = "2024-05-10T11:08:40.872Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

