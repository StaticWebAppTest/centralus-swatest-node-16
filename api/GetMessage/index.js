module.exports = async function (context, req) {
  const date = "2023-08-17T06:10:59.830Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

