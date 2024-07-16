module.exports = async function (context, req) {
  const date = "2024-07-16T05:10:14.191Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

