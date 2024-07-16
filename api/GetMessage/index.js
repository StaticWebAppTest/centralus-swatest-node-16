module.exports = async function (context, req) {
  const date = "2024-07-16T23:11:07.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

