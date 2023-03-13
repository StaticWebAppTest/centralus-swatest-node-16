module.exports = async function (context, req) {
  const date = "2023-03-13T22:09:25.478Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

