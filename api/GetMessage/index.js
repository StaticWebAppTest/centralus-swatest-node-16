module.exports = async function (context, req) {
  const date = "2023-04-07T23:08:03.807Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

