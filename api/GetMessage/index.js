module.exports = async function (context, req) {
  const date = "2022-09-10T21:10:16.536Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

