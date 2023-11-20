module.exports = async function (context, req) {
  const date = "2023-11-20T06:13:08.483Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

