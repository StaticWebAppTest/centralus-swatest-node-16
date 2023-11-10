module.exports = async function (context, req) {
  const date = "2023-11-10T18:11:16.892Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

