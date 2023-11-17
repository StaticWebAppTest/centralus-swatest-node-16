module.exports = async function (context, req) {
  const date = "2023-11-17T13:12:15.021Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

