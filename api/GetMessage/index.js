module.exports = async function (context, req) {
  const date = "2022-08-12T21:10:06.237Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

