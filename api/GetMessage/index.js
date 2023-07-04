module.exports = async function (context, req) {
  const date = "2023-07-04T12:20:01.656Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

