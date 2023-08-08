module.exports = async function (context, req) {
  const date = "2023-08-08T11:07:18.769Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

