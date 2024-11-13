module.exports = async function (context, req) {
  const date = "2024-11-13T21:10:54.900Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

