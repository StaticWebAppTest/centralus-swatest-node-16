module.exports = async function (context, req) {
  const date = "2022-08-12T14:10:42.330Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

