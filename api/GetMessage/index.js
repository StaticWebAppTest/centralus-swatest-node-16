module.exports = async function (context, req) {
  const date = "2022-08-17T11:09:22.499Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

