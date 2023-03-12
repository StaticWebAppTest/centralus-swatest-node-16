module.exports = async function (context, req) {
  const date = "2023-03-12T11:07:13.758Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

