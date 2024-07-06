module.exports = async function (context, req) {
  const date = "2024-07-06T06:13:12.141Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

