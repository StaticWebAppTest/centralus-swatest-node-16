module.exports = async function (context, req) {
  const date = "2022-09-19T08:20:21.822Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

