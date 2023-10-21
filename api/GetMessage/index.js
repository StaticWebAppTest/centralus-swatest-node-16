module.exports = async function (context, req) {
  const date = "2023-10-21T19:06:27.338Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

