module.exports = async function (context, req) {
  const date = "2023-02-04T06:11:29.130Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

