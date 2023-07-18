module.exports = async function (context, req) {
  const date = "2023-07-18T17:08:25.622Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

