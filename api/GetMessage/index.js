module.exports = async function (context, req) {
  const date = "2023-03-27T02:01:46.478Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

