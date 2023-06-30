module.exports = async function (context, req) {
  const date = "2023-06-30T21:08:18.973Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

