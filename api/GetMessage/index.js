module.exports = async function (context, req) {
  const date = "2023-02-04T19:06:54.806Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

