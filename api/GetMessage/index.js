module.exports = async function (context, req) {
  const date = "2024-05-13T06:13:40.589Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

