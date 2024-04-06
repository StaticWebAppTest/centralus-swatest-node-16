module.exports = async function (context, req) {
  const date = "2024-04-06T08:11:30.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

