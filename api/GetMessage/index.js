module.exports = async function (context, req) {
  const date = "2022-05-28T08:14:51.906Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

