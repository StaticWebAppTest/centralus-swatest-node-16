module.exports = async function (context, req) {
  const date = "2023-11-16T06:12:36.483Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

