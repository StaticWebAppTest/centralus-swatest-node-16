module.exports = async function (context, req) {
  const date = "2022-06-10T16:15:46.035Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

