module.exports = async function (context, req) {
  const date = "2023-09-03T22:07:30.941Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

