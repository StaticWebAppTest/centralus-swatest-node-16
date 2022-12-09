module.exports = async function (context, req) {
  const date = "2022-12-09T23:09:45.030Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

