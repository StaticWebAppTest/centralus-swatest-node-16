module.exports = async function (context, req) {
  const date = "2023-06-21T06:11:52.351Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

