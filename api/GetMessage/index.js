module.exports = async function (context, req) {
  const date = "2023-07-04T10:11:13.442Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

