module.exports = async function (context, req) {
  const date = "2023-02-21T09:10:14.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

