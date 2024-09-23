module.exports = async function (context, req) {
  const date = "2024-09-23T13:20:21.720Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

