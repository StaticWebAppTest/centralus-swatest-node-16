module.exports = async function (context, req) {
  const date = "2022-08-17T13:41:24.342Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

