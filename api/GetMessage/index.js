module.exports = async function (context, req) {
  const date = "2024-09-04T09:12:09.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

