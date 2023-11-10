module.exports = async function (context, req) {
  const date = "2023-11-10T15:09:07.028Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

