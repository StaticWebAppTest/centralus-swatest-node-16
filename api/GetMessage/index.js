module.exports = async function (context, req) {
  const date = "2024-05-04T09:10:31.143Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

