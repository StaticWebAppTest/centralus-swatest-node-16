module.exports = async function (context, req) {
  const date = "2022-12-15T05:09:33.882Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

