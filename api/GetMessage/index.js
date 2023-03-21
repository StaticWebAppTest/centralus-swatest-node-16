module.exports = async function (context, req) {
  const date = "2023-03-21T12:17:39.807Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

