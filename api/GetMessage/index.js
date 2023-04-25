module.exports = async function (context, req) {
  const date = "2023-04-25T10:09:51.633Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

