module.exports = async function (context, req) {
  const date = "2024-08-10T15:10:34.807Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

