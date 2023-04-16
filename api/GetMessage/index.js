module.exports = async function (context, req) {
  const date = "2023-04-16T10:08:33.128Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

