module.exports = async function (context, req) {
  const date = "2023-04-28T13:10:54.135Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

