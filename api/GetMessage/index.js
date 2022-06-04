module.exports = async function (context, req) {
  const date = "2022-06-04T19:08:04.690Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

