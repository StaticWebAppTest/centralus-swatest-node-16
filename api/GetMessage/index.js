module.exports = async function (context, req) {
  const date = "2023-12-12T15:09:34.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

