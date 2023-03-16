module.exports = async function (context, req) {
  const date = "2023-03-16T09:10:41.949Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

