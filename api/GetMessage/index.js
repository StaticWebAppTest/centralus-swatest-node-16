module.exports = async function (context, req) {
  const date = "2023-03-17T21:08:21.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

