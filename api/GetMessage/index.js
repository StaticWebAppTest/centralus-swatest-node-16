module.exports = async function (context, req) {
  const date = "2024-01-10T04:11:36.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

