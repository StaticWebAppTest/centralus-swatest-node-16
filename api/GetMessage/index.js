module.exports = async function (context, req) {
  const date = "2024-03-12T22:08:22.447Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

