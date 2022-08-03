module.exports = async function (context, req) {
  const date = "2022-08-03T08:15:42.532Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

