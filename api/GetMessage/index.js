module.exports = async function (context, req) {
  const date = "2023-01-21T06:11:22.038Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

