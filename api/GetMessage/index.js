module.exports = async function (context, req) {
  const date = "2023-09-11T20:08:05.796Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

