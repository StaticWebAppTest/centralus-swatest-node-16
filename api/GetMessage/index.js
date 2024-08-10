module.exports = async function (context, req) {
  const date = "2024-08-10T23:10:21.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

