module.exports = async function (context, req) {
  const date = "2022-04-27T09:11:27.629Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

