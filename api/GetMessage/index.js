module.exports = async function (context, req) {
  const date = "2023-11-21T08:12:39.866Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

