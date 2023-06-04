module.exports = async function (context, req) {
  const date = "2023-06-04T15:07:46.671Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

