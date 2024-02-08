module.exports = async function (context, req) {
  const date = "2024-02-08T06:12:31.759Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

