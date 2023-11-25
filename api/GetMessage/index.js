module.exports = async function (context, req) {
  const date = "2023-11-25T13:09:30.372Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

