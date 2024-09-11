module.exports = async function (context, req) {
  const date = "2024-09-11T20:10:39.093Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

