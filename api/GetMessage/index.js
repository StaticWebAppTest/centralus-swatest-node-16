module.exports = async function (context, req) {
  const date = "2023-08-23T06:10:58.558Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

