module.exports = async function (context, req) {
  const date = "2023-04-13T18:11:04.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

