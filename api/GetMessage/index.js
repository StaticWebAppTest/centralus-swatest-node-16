module.exports = async function (context, req) {
  const date = "2023-04-12T04:10:46.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

