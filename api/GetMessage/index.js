module.exports = async function (context, req) {
  const date = "2023-07-17T01:02:50.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

