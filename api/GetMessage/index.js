module.exports = async function (context, req) {
  const date = "2023-08-05T09:07:37.597Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

