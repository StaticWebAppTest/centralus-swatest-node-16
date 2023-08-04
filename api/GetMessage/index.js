module.exports = async function (context, req) {
  const date = "2023-08-04T19:07:00.803Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

