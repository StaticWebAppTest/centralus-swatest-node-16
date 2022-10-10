module.exports = async function (context, req) {
  const date = "2022-10-10T04:08:46.035Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

