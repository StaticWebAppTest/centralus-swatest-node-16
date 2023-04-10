module.exports = async function (context, req) {
  const date = "2023-04-10T10:09:47.294Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

