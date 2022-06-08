module.exports = async function (context, req) {
  const date = "2022-06-08T15:11:17.586Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

