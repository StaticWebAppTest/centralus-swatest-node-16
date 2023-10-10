module.exports = async function (context, req) {
  const date = "2023-10-10T15:09:20.758Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

