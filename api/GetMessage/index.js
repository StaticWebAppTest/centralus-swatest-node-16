module.exports = async function (context, req) {
  const date = "2024-08-04T08:12:02.631Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

