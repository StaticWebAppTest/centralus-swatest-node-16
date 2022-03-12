module.exports = async function (context, req) {
  const date = "2022-03-12T17:09:43.279Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

