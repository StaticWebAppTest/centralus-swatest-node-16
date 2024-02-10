module.exports = async function (context, req) {
  const date = "2024-02-10T13:09:39.800Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

