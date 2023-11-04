module.exports = async function (context, req) {
  const date = "2023-11-04T03:09:11.439Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

