module.exports = async function (context, req) {
  const date = "2022-09-05T11:10:42.660Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

