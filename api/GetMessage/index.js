module.exports = async function (context, req) {
  const date = "2022-11-16T06:13:53.483Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

