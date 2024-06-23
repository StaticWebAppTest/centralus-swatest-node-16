module.exports = async function (context, req) {
  const date = "2024-06-23T09:11:26.703Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

