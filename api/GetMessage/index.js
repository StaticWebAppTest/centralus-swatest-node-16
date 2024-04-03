module.exports = async function (context, req) {
  const date = "2024-04-03T06:12:04.108Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

