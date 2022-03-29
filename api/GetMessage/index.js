module.exports = async function (context, req) {
  const date = "2022-03-29T11:25:15.973Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

