module.exports = async function (context, req) {
  const date = "2022-09-17T01:06:27.347Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

