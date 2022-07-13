module.exports = async function (context, req) {
  const date = "2022-07-13T03:13:57.973Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

