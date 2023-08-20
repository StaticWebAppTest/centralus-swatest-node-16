module.exports = async function (context, req) {
  const date = "2023-08-20T19:06:50.795Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

