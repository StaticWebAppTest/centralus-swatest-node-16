module.exports = async function (context, req) {
  const date = "2023-08-14T06:12:25.161Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

