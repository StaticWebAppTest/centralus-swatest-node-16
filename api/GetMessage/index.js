module.exports = async function (context, req) {
  const date = "2023-03-18T11:07:27.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

