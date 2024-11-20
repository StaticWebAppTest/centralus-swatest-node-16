module.exports = async function (context, req) {
  const date = "2024-11-20T23:11:45.503Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

