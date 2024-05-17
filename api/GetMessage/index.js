module.exports = async function (context, req) {
  const date = "2024-05-17T18:13:15.094Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

