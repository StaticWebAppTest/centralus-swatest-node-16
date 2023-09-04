module.exports = async function (context, req) {
  const date = "2023-09-04T01:42:31.088Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

