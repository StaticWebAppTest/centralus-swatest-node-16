module.exports = async function (context, req) {
  const date = "2022-10-23T12:24:49.308Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

