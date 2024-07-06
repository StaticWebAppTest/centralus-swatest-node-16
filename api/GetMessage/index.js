module.exports = async function (context, req) {
  const date = "2024-07-06T15:10:16.578Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

