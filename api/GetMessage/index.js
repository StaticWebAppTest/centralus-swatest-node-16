module.exports = async function (context, req) {
  const date = "2023-06-12T06:12:04.105Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

