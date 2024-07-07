module.exports = async function (context, req) {
  const date = "2024-07-07T06:14:21.443Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

