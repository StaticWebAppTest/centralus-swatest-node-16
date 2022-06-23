module.exports = async function (context, req) {
  const date = "2022-06-23T03:04:24.094Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

