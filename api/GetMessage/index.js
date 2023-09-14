module.exports = async function (context, req) {
  const date = "2023-09-14T08:11:28.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

