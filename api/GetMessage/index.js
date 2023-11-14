module.exports = async function (context, req) {
  const date = "2023-11-14T23:09:04.558Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

