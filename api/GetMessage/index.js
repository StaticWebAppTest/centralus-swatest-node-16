module.exports = async function (context, req) {
  const date = "2023-10-04T22:09:12.038Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

