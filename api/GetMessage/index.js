module.exports = async function (context, req) {
  const date = "2023-09-30T05:07:51.051Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

