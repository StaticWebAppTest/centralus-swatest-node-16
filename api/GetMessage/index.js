module.exports = async function (context, req) {
  const date = "2023-07-04T17:09:02.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

