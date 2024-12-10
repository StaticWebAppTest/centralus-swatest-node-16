module.exports = async function (context, req) {
  const date = "2024-12-10T23:11:53.979Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

