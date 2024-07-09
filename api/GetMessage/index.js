module.exports = async function (context, req) {
  const date = "2024-07-09T05:10:21.793Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

