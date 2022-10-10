module.exports = async function (context, req) {
  const date = "2022-10-10T08:21:35.473Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

