module.exports = async function (context, req) {
  const date = "2024-02-23T06:12:31.283Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

