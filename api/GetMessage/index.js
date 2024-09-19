module.exports = async function (context, req) {
  const date = "2024-09-19T14:10:29.807Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

