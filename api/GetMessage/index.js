module.exports = async function (context, req) {
  const date = "2023-01-08T04:11:44.807Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

