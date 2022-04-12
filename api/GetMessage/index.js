module.exports = async function (context, req) {
  const date = "2022-04-12T06:13:16.483Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

