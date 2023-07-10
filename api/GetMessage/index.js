module.exports = async function (context, req) {
  const date = "2023-07-10T15:10:28.230Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

