module.exports = async function (context, req) {
  const date = "2024-03-11T23:10:04.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

