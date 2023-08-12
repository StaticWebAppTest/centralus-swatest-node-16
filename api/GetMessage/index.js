module.exports = async function (context, req) {
  const date = "2023-08-12T14:06:36.038Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

