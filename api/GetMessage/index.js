module.exports = async function (context, req) {
  const date = "2023-09-04T23:08:03.558Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

