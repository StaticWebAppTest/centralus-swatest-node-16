module.exports = async function (context, req) {
  const date = "2023-05-21T15:07:50.177Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

