module.exports = async function (context, req) {
  const date = "2022-11-27T14:08:29.973Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

