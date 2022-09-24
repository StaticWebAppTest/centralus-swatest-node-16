module.exports = async function (context, req) {
  const date = "2022-09-24T12:23:02.558Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

