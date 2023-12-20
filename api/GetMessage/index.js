module.exports = async function (context, req) {
  const date = "2023-12-20T01:30:18.038Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

