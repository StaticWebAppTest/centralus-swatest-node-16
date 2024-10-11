module.exports = async function (context, req) {
  const date = "2024-10-11T20:12:40.284Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

