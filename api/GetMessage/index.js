module.exports = async function (context, req) {
  const date = "2022-05-15T21:09:36.154Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

