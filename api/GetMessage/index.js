module.exports = async function (context, req) {
  const date = "2022-11-22T16:15:01.319Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

