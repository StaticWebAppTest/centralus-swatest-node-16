module.exports = async function (context, req) {
  const date = "2023-04-20T08:11:42.973Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

