module.exports = async function (context, req) {
  const date = "2023-07-25T12:18:05.401Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

