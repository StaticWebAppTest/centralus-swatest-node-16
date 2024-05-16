module.exports = async function (context, req) {
  const date = "2024-05-16T13:11:10.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

