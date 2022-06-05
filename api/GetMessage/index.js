module.exports = async function (context, req) {
  const date = "2022-06-05T16:13:23.168Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

