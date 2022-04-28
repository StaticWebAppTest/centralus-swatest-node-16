module.exports = async function (context, req) {
  const date = "2022-04-28T18:19:12.758Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

