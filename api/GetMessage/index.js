module.exports = async function (context, req) {
  const date = "2022-10-22T05:40:39.973Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

