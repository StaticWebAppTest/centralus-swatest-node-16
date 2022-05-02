module.exports = async function (context, req) {
  const date = "2022-05-02T17:19:48.338Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

