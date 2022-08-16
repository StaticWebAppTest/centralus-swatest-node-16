module.exports = async function (context, req) {
  const date = "2022-08-16T07:08:55.690Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

