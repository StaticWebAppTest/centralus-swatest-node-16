module.exports = async function (context, req) {
  const date = "2023-11-07T09:09:01.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

