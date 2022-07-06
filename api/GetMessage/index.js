module.exports = async function (context, req) {
  const date = "2022-07-06T21:09:46.665Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

