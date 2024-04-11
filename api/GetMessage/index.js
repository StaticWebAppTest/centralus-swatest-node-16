module.exports = async function (context, req) {
  const date = "2024-04-11T13:09:55.728Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

