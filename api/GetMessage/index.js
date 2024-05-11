module.exports = async function (context, req) {
  const date = "2024-05-11T15:08:50.522Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

