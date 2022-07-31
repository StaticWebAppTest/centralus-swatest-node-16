module.exports = async function (context, req) {
  const date = "2022-07-31T21:09:19.631Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

