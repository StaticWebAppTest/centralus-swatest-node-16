module.exports = async function (context, req) {
  const date = "2023-11-14T20:08:45.376Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

