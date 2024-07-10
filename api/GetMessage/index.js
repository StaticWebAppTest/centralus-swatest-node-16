module.exports = async function (context, req) {
  const date = "2024-07-10T23:10:22.364Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

