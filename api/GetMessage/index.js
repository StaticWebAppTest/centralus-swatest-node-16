module.exports = async function (context, req) {
  const date = "2023-12-16T11:07:04.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

