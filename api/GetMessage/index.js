module.exports = async function (context, req) {
  const date = "2023-07-26T18:10:45.038Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

