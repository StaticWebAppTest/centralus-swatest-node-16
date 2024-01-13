module.exports = async function (context, req) {
  const date = "2024-01-13T05:09:04.900Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

