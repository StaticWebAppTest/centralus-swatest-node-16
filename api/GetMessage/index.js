module.exports = async function (context, req) {
  const date = "2023-12-04T10:10:50.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

