module.exports = async function (context, req) {
  const date = "2024-04-10T06:12:56.108Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

