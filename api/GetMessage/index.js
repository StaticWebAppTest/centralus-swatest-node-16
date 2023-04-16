module.exports = async function (context, req) {
  const date = "2023-04-16T14:07:04.628Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

