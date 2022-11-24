module.exports = async function (context, req) {
  const date = "2022-11-24T16:13:39.473Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

