module.exports = async function (context, req) {
  const date = "2022-11-27T09:09:19.415Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

