module.exports = async function (context, req) {
  const date = "2022-12-12T17:08:48.146Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

