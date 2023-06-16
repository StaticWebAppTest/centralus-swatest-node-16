module.exports = async function (context, req) {
  const date = "2023-06-16T11:07:12.164Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

