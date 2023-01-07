module.exports = async function (context, req) {
  const date = "2023-01-07T19:07:06.807Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

