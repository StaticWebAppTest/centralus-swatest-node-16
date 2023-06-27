module.exports = async function (context, req) {
  const date = "2023-06-27T13:19:12.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

