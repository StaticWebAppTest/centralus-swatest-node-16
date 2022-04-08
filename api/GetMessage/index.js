module.exports = async function (context, req) {
  const date = "2022-04-08T12:19:22.338Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

