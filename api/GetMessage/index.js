module.exports = async function (context, req) {
  const date = "2022-05-23T17:16:40.206Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

