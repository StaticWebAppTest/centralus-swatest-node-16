module.exports = async function (context, req) {
  const date = "2024-09-10T22:10:52.767Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

