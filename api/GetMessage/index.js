module.exports = async function (context, req) {
  const date = "2024-07-13T15:09:42.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

