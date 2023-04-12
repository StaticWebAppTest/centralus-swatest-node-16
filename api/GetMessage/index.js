module.exports = async function (context, req) {
  const date = "2023-04-12T17:08:11.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

