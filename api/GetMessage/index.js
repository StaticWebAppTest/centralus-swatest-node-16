module.exports = async function (context, req) {
  const date = "2023-07-19T09:08:55.816Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

