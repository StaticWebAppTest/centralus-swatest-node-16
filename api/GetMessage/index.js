module.exports = async function (context, req) {
  const date = "2024-04-25T09:09:51.447Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

