module.exports = async function (context, req) {
  const date = "2024-03-06T09:09:34.486Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

