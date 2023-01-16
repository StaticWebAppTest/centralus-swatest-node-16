module.exports = async function (context, req) {
  const date = "2023-01-16T06:13:12.358Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

