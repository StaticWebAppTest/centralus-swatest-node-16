module.exports = async function (context, req) {
  const date = "2023-08-06T09:07:29.579Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

