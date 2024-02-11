module.exports = async function (context, req) {
  const date = "2024-02-11T17:08:10.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

