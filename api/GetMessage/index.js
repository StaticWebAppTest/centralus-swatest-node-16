module.exports = async function (context, req) {
  const date = "2023-12-13T01:53:02.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

