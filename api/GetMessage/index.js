module.exports = async function (context, req) {
  const date = "2023-01-13T06:12:39.900Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

