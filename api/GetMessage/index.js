module.exports = async function (context, req) {
  const date = "2024-11-11T17:10:04.099Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

