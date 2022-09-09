module.exports = async function (context, req) {
  const date = "2022-09-09T23:13:24.558Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

