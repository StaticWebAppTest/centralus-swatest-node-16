module.exports = async function (context, req) {
  const date = "2024-08-23T17:09:25.038Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

