module.exports = async function (context, req) {
  const date = "2023-02-21T08:13:11.760Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

