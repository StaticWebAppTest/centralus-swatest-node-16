module.exports = async function (context, req) {
  const date = "2022-06-13T21:09:57.499Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

