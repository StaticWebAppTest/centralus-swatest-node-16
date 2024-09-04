module.exports = async function (context, req) {
  const date = "2024-09-04T19:08:59.731Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

