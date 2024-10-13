module.exports = async function (context, req) {
  const date = "2024-10-13T15:11:19.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

