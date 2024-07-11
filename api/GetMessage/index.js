module.exports = async function (context, req) {
  const date = "2024-07-11T15:10:39.522Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

