module.exports = async function (context, req) {
  const date = "2022-12-21T08:12:33.182Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

