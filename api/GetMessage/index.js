module.exports = async function (context, req) {
  const date = "2022-10-05T17:38:31.338Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

