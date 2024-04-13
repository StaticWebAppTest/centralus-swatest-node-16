module.exports = async function (context, req) {
  const date = "2024-04-13T18:09:19.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

