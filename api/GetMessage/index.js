module.exports = async function (context, req) {
  const date = "2024-02-10T06:10:34.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

