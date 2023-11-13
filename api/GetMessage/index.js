module.exports = async function (context, req) {
  const date = "2023-11-13T06:12:05.376Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

