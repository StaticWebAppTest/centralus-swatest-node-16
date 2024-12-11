module.exports = async function (context, req) {
  const date = "2024-12-11T13:23:30.318Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

