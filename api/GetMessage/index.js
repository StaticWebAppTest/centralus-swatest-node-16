module.exports = async function (context, req) {
  const date = "2023-08-23T05:08:06.333Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

