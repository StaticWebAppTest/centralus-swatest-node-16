module.exports = async function (context, req) {
  const date = "2022-09-17T13:28:18.663Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

