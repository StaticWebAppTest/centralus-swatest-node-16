module.exports = async function (context, req) {
  const date = "2022-10-03T03:23:02.973Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

