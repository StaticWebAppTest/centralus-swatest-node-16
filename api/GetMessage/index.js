module.exports = async function (context, req) {
  const date = "2023-07-15T07:08:45.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

