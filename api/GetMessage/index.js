module.exports = async function (context, req) {
  const date = "2024-03-11T04:12:12.436Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

