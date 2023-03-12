module.exports = async function (context, req) {
  const date = "2023-03-12T09:08:40.978Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

