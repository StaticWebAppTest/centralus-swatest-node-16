module.exports = async function (context, req) {
  const date = "2022-10-20T19:21:45.558Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

