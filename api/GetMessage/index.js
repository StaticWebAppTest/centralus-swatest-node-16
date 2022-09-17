module.exports = async function (context, req) {
  const date = "2022-09-17T06:15:28.433Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

