module.exports = async function (context, req) {
  const date = "2024-09-01T15:10:03.900Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

