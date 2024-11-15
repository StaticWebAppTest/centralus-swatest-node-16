module.exports = async function (context, req) {
  const date = "2024-11-15T15:12:25.578Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

