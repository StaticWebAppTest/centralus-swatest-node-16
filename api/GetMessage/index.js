module.exports = async function (context, req) {
  const date = "2022-09-01T17:17:33.558Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

