module.exports = async function (context, req) {
  const date = "2024-09-04T10:11:45.623Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

