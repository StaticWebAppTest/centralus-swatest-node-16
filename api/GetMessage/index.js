module.exports = async function (context, req) {
  const date = "2024-05-15T06:13:07.662Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

