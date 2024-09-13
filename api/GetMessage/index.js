module.exports = async function (context, req) {
  const date = "2024-09-13T02:09:11.447Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

