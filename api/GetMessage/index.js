module.exports = async function (context, req) {
  const date = "2022-03-30T12:18:27.918Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

